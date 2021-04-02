import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as actions from "../actions/StudentActions";

const AddStudentComponent = ({ classes, ...props }) => {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [gender, setgender] = useState();

  useEffect(() => {
    if (props.currentId != 0) {
      const updateToBeStudent = props.studentList.find(
        (x) => x.id == props.currentId
      );

      setname(updateToBeStudent.name);
      setage(updateToBeStudent.age);
      setgender(updateToBeStudent.gender);
    }
  }, [props.currentId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    console.log(newStudent);
    if (props.currentId == 0) {
      props.createStudent(newStudent, () => {
        window.alert("Inserted Successfully");
      });
    } else {
      console.log(props.currentId);
      props.updateStudent(props.currentId, newStudent, () => {
        window.alert("Updated Successfully");
      });
    }
  };

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit}>
        <div class="form-group mt-3">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
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
            value={age}
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
            value={gender}
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
