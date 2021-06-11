import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";
import axios from "axios";
// import SearchBar from "./SearchBar";

const CTable = () => {
  // const classes = useStyles();

  const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  });
  console.log(coins, "hiiiiiiiiiiiiiiiiii");
  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  // const filterCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <>
      <div className="table">
        <Container className="{classes,root}">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    Stock Details Table
                  </TableCell>
                  <TableCell>
                    <input
                      type="text"
                      placeholder="Search here"
                      className="coin-input"
                    />
                    {/* <div className="coint-app">
                      <div className="coin-search">
                        <h1 className="coin-text">Search by Company Name </h1>
                        <form>
                          <input
                            type="text"
                            placeholder="Search"
                            className="coin-input"
                            onChange={handleChange}
                          />
                        </form>
                      </div>
                    </div> */}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableHead color="#F4F2FF">
                <TableRow>
                  <TableCell align="center">Company Name</TableCell>
                  <TableCell align="center">Symbol</TableCell>
                  <TableCell align="center"> Market Cap</TableCell>
                  <TableCell align="center"> </TableCell>
                  <TableCell align="center">Curent Price</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {coins
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((coin) => (
                    <TableRow>
                      <TableCell align="center">{coin.name} </TableCell>
                      <TableCell align="center"> {coin.symbol} </TableCell>
                      <TableCell align="center">{coin.market_cap} </TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="primary">
                          view
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        {coin.current_price}{" "}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            display="inline-block"
            float="left"
            padding="8px 16px"
            align="center"
            rowsPerPageOptions={[5, 10, 15, 25]}
            count={coins.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
          />
        </Container>
      </div>
    </>
  );
};

export default CTable;
