using System;
using Microsoft.AspNetCore.Mvc;
using TesteNoSQL.Models;
using TesteNoSQL.Services;

namespace TesteNoSQL.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult CadastrarUsuario(usuarioModel usuario)
        {
            try
            {
                _userService.CadastrarUsuario(usuario);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_userService.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpGet("qtdados")]
        public IActionResult QtDados(){
            try
            {
                return Ok(_userService.BuscarQuantidadeDados());   
            }
            catch (System.Exception ex)
            {
                return BadRequest();
            }
        }
    }
}