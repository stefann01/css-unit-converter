import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useRows from "./service/useRows";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useThemeContext } from "./context/theme-context";
import Theme from "./Theme/themes.enum";

function App() {
  const { value, setValue, fontBaseSize, setFontBaseSize, rows } = useRows();
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="entireContainer">
      {theme === Theme.Dark ? (
        <FiSun
          className="settingsIcon"
          onClick={() => {
            setTheme(Theme.Light);
          }}
        />
      ) : (
        <FaMoon
          className="settingsIcon"
          onClick={() => {
            setTheme(Theme.Dark);
          }}
        />
      )}
      <Container maxWidth="md" className={"unitContainer"}>
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={4}></Grid>
          <Grid container item xs={12} sm={4} justify="center">
            <h1 className={"title"}>Unit Converter</h1>
          </Grid>
          <Grid container item xs={12} sm={4}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} container justify="center">
            <TextField
              InputProps={{
                inputProps: {
                  min: 1,
                },
              }}
              id="filled-basic"
              type="number"
              variant="filled"
              fullWidth
              label="Value"
              margin="dense"
              value={value}
              onChange={(e) => {
                setValue(parseFloat(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} container justify="center">
            <TextField
              InputProps={{
                inputProps: {
                  min: 1,
                },
              }}
              fullWidth
              label="Default font size"
              id="filled-basic"
              margin="dense"
              variant="filled"
              type="number"
              value={fontBaseSize}
              onChange={(e) => {
                setFontBaseSize(parseInt(e.target.value));
              }}
            />
          </Grid>
        </Grid>

        <TableContainer
          style={{ marginTop: "1%", borderRadius: "10px" }}
          className="tableContainer"
        >
          <Table aria-label="simple table" className="table">
            <TableHead className="tableHeader">
              <TableRow className="tableRow">
                <TableCell
                  style={{ backgroundColor: "#81c784" }}
                  className="tableCellHeader"
                >{`Value: ${value}`}</TableCell>
                <TableCell className="tableCellHeader" align="center">
                  px
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  rem
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  em
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  pt
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                let cssClass =
                  index % 2 === 0 ? "tableCellEven" : "tableCellOdd";
                return (
                  <TableRow key={row!.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={"tableCellHeader"}
                    >
                      {row!.name}
                    </TableCell>
                    <TableCell align="center" className={cssClass}>
                      {row?.px}
                    </TableCell>
                    <TableCell align="center" className={cssClass}>
                      {row?.rem}
                    </TableCell>
                    <TableCell align="center" className={cssClass}>
                      {row?.em}
                    </TableCell>
                    <TableCell align="center" className={cssClass}>
                      {row?.pt}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default App;
