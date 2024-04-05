// Assuming you have Mocha and Chai installed
import chai from 'chai';
import response from 'express'
import chaiHttp from 'chai-http';
import app from '../index.js';

const { expect } = chai;

var assert=chai.assert;
var should=chai.should()

chai.use(chaiHttp)

describe('Task Root page',function(){
  it('get root page',function(done){
    chai.request(app)
    .get('/')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    })
  })
})

describe('Task hotels page',function(){
  it('get hotel page',function(done){
    chai.request(app)
    .get('/hotels/get')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    })
  })
})

describe('Task signup page',function(){
  it('get signup page',function(done){
    chai.request(app)
    .post('/users/signup')
    .end((err,response)=>{
      expect(response.status).to.be.equal(500)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    })
  })
})

describe('Task login page',function(){
  it('get login page',function(done){
    chai.request(app)
    .post('/users/signup')
    .end((err,response)=>{
      expect(response.status).to.be.equal(500)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    })
  })
})

describe('Task book page',function(){
  it('get book page',function(done){
    chai.request(app)
    .get('/book')
    .end((err,response)=>{
      expect(response.status).to.be.equal(404)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    })
  })
})

describe('Task mainpage page',function(){
  it('get mainpage page',function(done){
    chai.request(app)
    .get('/mainpage')
    .end((err,response)=>{
      expect(response.status).to.be.equal(404)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    })
  })
})