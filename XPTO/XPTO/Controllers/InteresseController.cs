﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XPTO.Domains;
using XPTO.Interfaces;
using XPTO.Repositories;

namespace XPTO.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class InteresseController : ControllerBase
    {
        private IInteresseRepository _interesseRepository { get; set; }

        public InteresseController()
        {
            _interesseRepository = new InteresseRepository();
        }

        [HttpPost]
        public IActionResult Post(Interesse novoInteresse)
        {
            // Faz a chamada para o método
            _interesseRepository.Cadastrar(novoInteresse);

            // Retorna um status code
            return StatusCode(201);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            // Retorna a resposta da requisição fazendo a chamada para o método
            return Ok(_interesseRepository.BuscarPorId(id));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Faz a chamada para o método
            _interesseRepository.Deletar(id);

            // Retorna um status code
            return StatusCode(204);
        }
    }
}
