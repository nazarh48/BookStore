//using BookStore.Model;
//using BookStoreApi.Data;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Logging;
//using System;
//using System.Collections.Generic;
//using System.Threading.Tasks;

//namespace BookStore.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class BooksController : ControllerBase
//    {
//        //private readonly AppDbContext _context;
//        //private readonly ILogger<BooksController> _logger;

//        //public BooksController(AppDbContext context, ILogger<BooksController> logger)
//        //{
//        //    _context = context;
//        //    _logger = logger;
//        //}

//        ///// <summary>
//        ///// Retrieves all books from the database.
//        ///// </summary>
//        ///// <returns>List of books</returns>
//        //[HttpGet]
//        //public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
//        //{
//        //    try
//        //    {
//        //        return await _context.Books.ToListAsync();
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        _logger.LogError(ex, "Error fetching books");
//        //        return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while fetching books.");
//        //    }
//        //}

//        ///// <summary>
//        ///// Retrieves a specific book by ID.
//        ///// </summary>
//        ///// <param name="id">The ID of the book</param>
//        ///// <returns>The requested book or NotFound if it does not exist</returns>
//        //[HttpGet("{id}")]
//        //public async Task<ActionResult<Book>> GetBook(int id)
//        //{
//        //    try
//        //    {
//        //        var book = await _context.Books.FindAsync(id);
//        //        if (book == null)
//        //        {
//        //            return NotFound(new { message = "Book not found" });
//        //        }
//        //        return book;
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        _logger.LogError(ex, $"Error fetching book with ID {id}");
//        //        return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while fetching the book.");
//        //    }
//        //}

//        ///// <summary>
//        ///// Adds a new book to the database.
//        ///// </summary>
//        ///// <param name="book">Book object to add</param>
//        ///// <returns>The created book</returns>
//        //[HttpPost]
//        //public async Task<ActionResult<Book>> PostBook(Book book)
//        //{
//        //    try
//        //    {
//        //        if (!ModelState.IsValid)
//        //        {
//        //            return BadRequest(ModelState);
//        //        }

//        //        _context.Books.Add(book);
//        //        await _context.SaveChangesAsync();
//        //        return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        _logger.LogError(ex, "Error adding book");
//        //        return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while adding the book.");
//        //    }
//        //}

//        ///// <summary>
//        ///// Updates an existing book by ID.
//        ///// </summary>
//        ///// <param name="id">The ID of the book to update</param>
//        ///// <param name="book">Updated book object</param>
//        ///// <returns>No content if successful, or appropriate error response</returns>
//        //[HttpPut("{id}")]
//        //public async Task<IActionResult> PutBook(int id, [FromBody] Book book)
//        //{
//        //    try
//        //    {
//        //        if (book == null)
//        //        {
//        //            return BadRequest(new { message = "Invalid book data" });
//        //        }

//        //        if (id != book.Id)
//        //        {
//        //            return BadRequest(new { message = "Book ID mismatch" });
//        //        }

//        //        _context.Entry(book).State = EntityState.Modified;
//        //        await _context.SaveChangesAsync();
//        //        return NoContent();
//        //    }
//        //    catch (DbUpdateConcurrencyException)
//        //    {
//        //        if (!BookExists(id))
//        //        {
//        //            return NotFound(new { message = "Book not found" });
//        //        }
//        //        else
//        //        {
//        //            throw;
//        //        }
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        _logger.LogError(ex, $"Error updating book with ID {id}");
//        //        return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating the book.");
//        //    }
//        //}

//        ///// <summary>
//        ///// Deletes a book by ID.
//        ///// </summary>
//        ///// <param name="id">The ID of the book to delete</param>
//        ///// <returns>No content if successful, or appropriate error response</returns>
//        //[HttpDelete("{id}")]
//        //public async Task<IActionResult> DeleteBook(int id)
//        //{
//        //    try
//        //    {
//        //        var book = await _context.Books.FindAsync(id);
//        //        if (book == null)
//        //        {
//        //            return NotFound(new { message = "Book not found" });
//        //        }

//        //        _context.Books.Remove(book);
//        //        await _context.SaveChangesAsync();
//        //        return NoContent();
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        _logger.LogError(ex, $"Error deleting book with ID {id}");
//        //        return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the book.");
//        //    }
//        //}

//        ///// <summary>
//        ///// Checks if a book exists in the database.
//        ///// </summary>
//        ///// <param name="id">The ID of the book</param>
//        ///// <returns>True if book exists, otherwise false</returns>
//        //private bool BookExists(int id)
//        //{
//        //    return _context.Books.Any(e => e.Id == id);
//        //}
//    }
//}
