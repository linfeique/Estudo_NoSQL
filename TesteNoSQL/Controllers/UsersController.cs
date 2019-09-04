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

        [HttpPost]
        public IActionResult BuscarEmailSenha(usuarioModel usuario)
        {
            try
            {
                usuarioModel usuario1 = _userService.BuscarPorEmailSenha(usuario.Email, usuario.Senha);

                if(usuario1 == null)
                {
                    return NotFound("Usuário não encontrado");
                }

                return Ok(usuario1);
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }
    }
}