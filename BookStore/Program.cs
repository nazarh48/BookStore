using BookStoreApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configure the database connection using Entity Framework Core with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add controllers to the service container
builder.Services.AddControllers();

// Enable API documentation and endpoint exploration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS policy to allow requests from Angular frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy => policy.WithOrigins("http://localhost:4200") // Allow requests from Angular app
                        .AllowAnyMethod() // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
                        .AllowAnyHeader()); // Allow all headers
});

var app = builder.Build();

// Enable CORS policy for the application
app.UseCors("AllowAngularApp");

// Enable Swagger UI and API documentation in development mode
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enforce HTTPS redirection
app.UseHttpsRedirection();

// Enable authorization middleware
app.UseAuthorization();

// Map controller endpoints to handle API requests
app.MapControllers();

// Start the application
app.Run();
