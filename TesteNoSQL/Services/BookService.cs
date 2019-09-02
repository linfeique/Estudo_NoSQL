using System.Collections.Generic;
using MongoDB.Driver;
using TesteNoSQL.Models;

namespace TesteNoSQL.Services
{
    public class BookService
    {
        private readonly IMongoCollection<booksModel> _books;

        public BookService(IBookstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _books = database.GetCollection<booksModel>(settings.BooksCollectionName);
        }

        public List<booksModel> Get() =>
            _books.Find(book => true).ToList();

        public booksModel Get(string id) =>
            _books.Find<booksModel>(book => book.Id == id).FirstOrDefault();

        public booksModel Create(booksModel book)
        {
            _books.InsertOne(book);
            return book;
        }

        public void Update(string id, booksModel bookIn) =>
            _books.ReplaceOne(book => book.Id == id, bookIn);

        public void Remove(booksModel bookIn) =>
            _books.DeleteOne(book => book.Id == bookIn.Id);

        public void Remove(string id) => 
            _books.DeleteOne(book => book.Id == id);
    }
}