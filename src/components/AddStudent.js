import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as actions from "../actions/StudentActions";

const AddStudentComponent = (props) => {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [gender, setgender] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };
    console.log(newStudent);
    props.createStudent(newStudent, () => {
      window.alert("Inserted Successfully");
    });
  };

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit}>
        <div class="form-group mt-3">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div class="form-group mt-3">
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
        </div>
        <div class="form-group mt-3">
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            onChange={(e) => {
              setgender(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <Button type="submit" variant="contained" color="primary">
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentList: state.studentReducer.studentList,
});

const mapActionToProps = {
  createStudent: actions.create,
  updateStudent: actions.update,
};

export default connect(mapStateToProps, mapActionToProps)(AddStudentComponent);
