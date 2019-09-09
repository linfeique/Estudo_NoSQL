using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TesteNoSQL.Models
{
    public class usuarioModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set;}

        public string email { get; set; }

        public string senha { get; set; }
    }
}