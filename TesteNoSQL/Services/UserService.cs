using System.Collections.Generic;
using MongoDB.Driver;
using TesteNoSQL.Models;

namespace TesteNoSQL.Services
{
    public class UserService
    {
        private readonly IMongoCollection<usuarioModel> _user;

        public UserService(IBookstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _user = database.GetCollection<usuarioModel>("Users");
        }

        public List<usuarioModel> Listar() => _user.Find(user => true).ToList();

        public void CadastrarUsuario(usuarioModel usuario)
        {
            _user.InsertOne(usuario);
        }

        public usuarioModel BuscarPorEmailSenha(string email, string senha)
        {
            usuarioModel usuarioProcurado = _user.Find<usuarioModel>(user => user.email == email && user.senha == senha).FirstOrDefault();

            if(usuarioProcurado == null)
            {
                return null;
            }

            return usuarioProcurado;
        }

        public long BuscarQuantidadeDados() => 
            _user.Find(user => true).CountDocuments();
    }
}