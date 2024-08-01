using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private static List<TodoItem> TodoItems = new List<TodoItem>();
        private static int NextId = 1;

        [HttpGet]
        public ActionResult<IEnumerable<TodoItem>> GetTodos()
        {
            return Ok(TodoItems);
        }

        [HttpPost]
        public ActionResult<TodoItem> AddTodoItem(TodoItem todoItem)
        {
            todoItem.Id = NextId++;
            TodoItems.Add(todoItem);
            return CreatedAtAction(nameof(GetTodos), new { id = todoItem.Id }, todoItem);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateTodoItem(int id)
        {
            var todoItem = TodoItems.FirstOrDefault(t => t.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }

            todoItem.IsCompleted = !todoItem.IsCompleted;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTodoItem(int id)
        {
            var todoItem = TodoItems.FirstOrDefault(t => t.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }

            TodoItems.Remove(todoItem);
            return NoContent();
        }
    }
}
