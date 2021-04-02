import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/StudentActions";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddStudent from "./AddStudent";

const StudentsComponent = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllStudents();
  }, []);

  const OnDelete = (id) => {
    props.deleteStudent(id, () => {
      alert("Deleted successfully");
    });
  };
  return (
    <div className="container">
      <div>
        <AddStudent {...{ currentId, setCurrentId }} />
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.studentList.map((student, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{student.name}</TableCell>
                  <TableCell align="center">{student.age}</TableCell>
                  <TableCell align="center">{student.gender}</TableCell>
                  <TableCell align="center">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        setCurrentId(student.id);
                      }}
                    >
                      Edit
                    </button>
                  </TableCell>
                  <TableCell align="center">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        OnDelete(student.id);
                      }}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentList: state.studentReducer.studentList,
});

const mapActionToProps = {
  fetchAllStudents: actions.fetchAll,
  deleteStudent: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(StudentsComponent);
