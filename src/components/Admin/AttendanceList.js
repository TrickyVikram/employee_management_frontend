import React, { useState, useEffect } from 'react';
import { getAttendance } from '../../api/api';

const AttendanceList = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            const { data } = await getAttendance();
            setAttendance(data);
        };
        fetchAttendance();
    }, []);

    return (
        <div className="container">
            <h3>Attendance List</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map(att => (
                        <tr key={att._id}>
                            <td>{att.employeeName}</td>
                            <td>{new Date(att.date).toLocaleDateString()}</td>
                            <td>{att.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceList;
