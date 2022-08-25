let gulp = require('gulp');

function task(cb) {
  console.log('taskD');
  cb();
}

function task1(cb) {
  console.log(new Date().getDate());
  cb();
}

function task2(cb) {
  console.log(new Date().getMonth());
  cb();
}

function task3(cb) {
  console.log(new Date().getFullYear());
  cb();
}

exports.task1 = task1;
exports.task2 = task2;
exports.task3 = task3;

exports.default = task;