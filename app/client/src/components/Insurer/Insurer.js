import React from 'react';
import Action from '../Action/Action';

export default function Insurer({ insurers, onDelete, onPersist }) {
  const handleActionClick = (id, type) => {
    const insurer = insurers.find((insurers) => insurers._id === id);

    if (type === 'delete') {
      onDelete(insurer);

      return;
    }

    onPersist(insurers);
  };
  return (
    <div>
      {insurers.map(
        ({
          _id,
          name,
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
            <div style={styles.insurer} key={_id}>
              <div style={styles.flexRow}>
                <span style={styles.name}>{name}</span>
                <div style={styles.info}>
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
  insurer: {
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
