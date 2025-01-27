import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AthletesList = () => {
  const [athletes, setAthletes] = useState([]); // State to store athletes
  const [loading, setLoading] = useState(true); // Loading state to show a loading spinner or message
  const [error, setError] = useState(null); // State to handle errors

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/athletics'); // Fetch athletes data from API
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json(); // Parse the JSON response
        setAthletes(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Set error message if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after the request is done
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Loading state (can show a loading spinner or message)
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state (can display an error message)
  if (error) {
    return <div>Error: {error}</div>;
  }

    const uniqueClasses = [...new Set(athletes.map(athlete => athlete.class))];

  // Group athletes by class
  const groupedAthletes = uniqueClasses.map(className => ({
    className,
    names: athletes.filter(athlete => athlete.class === className).map(athlete => athlete.name),
  }));

  return (
    <div>
      <Container>
            <Row>
            <h2>Registered Athletes</h2>
                <Table>
                    <thead>
                        <tr>
                        {uniqueClasses.map(className => (
                            <th key={className}>{className}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {/* Render a <td> for each unique class and map its athletes */}
                        {[...new Set(athletes.map(athlete => athlete.class))].map(className => (
                            <td key={className}>
                            {athletes
                                .filter(athlete => athlete.class === className)
                                .map(athlete => (
                                <div key={athlete.name}>{athlete.name}</div>
                                ))}
                            </td>
                        ))}
                        </tr>
                    </tbody>
            </Table>
            </Row>
        </Container>

    </div>
  );
};

export default AthletesList;