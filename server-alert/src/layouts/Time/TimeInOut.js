import NavBar from 'Components/NavBar';
import Tables from 'Components/Table';
import TableTimeLog from 'Components/TableTimeLog';
import useAPI from 'hooks/useAPI';
import useLocalStorageState from 'hooks/useLocalStorageState';
import React, { useState } from 'react';

const TimeInOut = (props) => {
    const [TimeLog, setTimeLogs] = useLocalStorageState('timelog',props.TimeLog);
    // const {
    //     data: TimeInOut,
    //     error,
    //     isLoading,
    //   } = useAPI("http://localhost:3004/TimeLog", []);
    //   console.log(TimeLogs)
    return (
        <div>
            <div id="main-wrapper" style={{ padding: "16px 32px 0px 32px" }}>
                <div className="container-fluid">
                {/* <Tables></Tables> */}
                <TableTimeLog TimeLog={TimeLog}></TableTimeLog>
                </div>
            </div>
        </div>
    );
};

export default TimeInOut;