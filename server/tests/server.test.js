const expect  = require('expect');
const request = require('supertest');

const {app} = require('./../server');
cosnt {Todo} = require('./../models/todo');
cosnt {User} = require('./../models/user');

// describe('POST /todos', ()=> {
//    it('should create a new todo', (done)=>{})
// });