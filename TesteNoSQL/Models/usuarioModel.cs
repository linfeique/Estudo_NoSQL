using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TesteNoSQL.Models
{
    public class usuarioModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public int id { get; set;}

        public string Email { get; set; }

        public string Senha { get; set; }
    }
}