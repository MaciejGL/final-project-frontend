import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ClientList from './Dashboard/ClientList/ClientList';
import PendingList from './Dashboard/PendingList';
import Button from '../Button/Button';

const ProDashboard = (props) => {
  const { clients, invitations } = props;

  return (
    <>
      <h1>Dashboard</h1>
      <ClientList title="Active Clients" clients={clients} />
      <PendingList invitations={invitations} />
      <br />

      <Link to={`/invite`}>
        <Button actionStyle="create">Invite new clients</Button>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
  invitations: state.authReducer.user.invitations,
});

export default connect(mapStateToProps)(ProDashboard);
