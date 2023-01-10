const request = require("supertest");
require('dotenv').config();
const app = require('./index');
const baseURL = process.env.BASE_URL

describe("GET /test", () => {
    test("GET /test", (done) => {
        request(app)
            .get("/test")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
              });
    });
    test("GET /test", (done) => {
        request(app)
            .get("/test")
            .expect((res) => {
                res.body.message = "Test"
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
              });
    });
});