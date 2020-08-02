import React from 'react';
import Action from '../Action/Action';

export default function Brokers({ brokers, onDelete, onPersist }) {
  const handleActionClick = (id, type) => {
    const broker = brokers.find((brokers) => brokers._id === id);

    if (type === 'delete') {
      onDelete(broker);

      return;
    }

    onPersist(brokers);
  };
  return (
    <div>
      {brokers.map(
        ({
          _id,
          name,
          susep,
          branch,
          cnpj,
          zip_code,
          city_name,
          district_name,
          state_code,
          street_name,
          street_number,
          street_complement,
          email,
          phone,
          mobile_phone,
        }) => {
          return (
            <div style={styles.brokers} key={_id}>
              <div style={styles.flexRow}>
                <span style={styles.name}>{name}</span>
                <div style={styles.info}>
                  <span>{susep}</span>
                  <span>{branch}</span>
                  <span>{zip_code}</span>
                  <span>{city_name}</span>
                  <span>{district_name}</span>
                  <span>{state_code}</span>
                  <span>{street_name}</span>
                  <span>{street_number}</span>
                  <span>{street_complement}</span>
                  <span>{email}</span>
                  <span>{phone}</span>
                  <span>{mobile_phone}</span>
                </div>
                <div>
                  <Action
                    onActionClick={handleActionClick}
                    id={_id}
                    type="edit"
                  />
                  <Action
                    onActionClick={handleActionClick}
                    id={_id}
                    type="delete"
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

const styles = {
  brokers: {
    backgroundColor: '#4a8bb2',
    borderRadius: 5,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 30,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
  },

  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingRight: 10,
  },

  info: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};
