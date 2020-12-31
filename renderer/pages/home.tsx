import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

import {itemCategories} from '../lib'

const columns = [
  { key: 'ID', value: 'ID' },
  { key: 'NAME', value: 'NAME' },
  { key: 'LEVEL', value: 'LEVEL' },
  { key: 'IMAGE', value: 'IMAGE' },
  { key: 'AP', value: 'AP' },
  { key: 'AC', value: 'AC' },
  { key: 'MP', value: 'MP' },
  { key: 'DX', value: 'DX' },
  { key: 'MP', value: 'MP' },
  { key: 'MA', value: 'MA' },
  { key: 'MD', value: 'MD' },
  { key: 'WT', value: 'WT' },
  { key: 'DA', value: 'DA' },
  { key: 'LK', value: 'LK' },
  { key: 'HP', value: 'HP' },
  { key: 'DP', value: 'DP' },
  { key: 'HV', value: 'HV' },
  { key: 'HP_REC', value: 'HP REC' },
  { key: 'MP_REC', value: 'MP REC' }
];

const items = [{
  AC: 'ACCC',
  AP: 'AP',
  DA: 'DA',
  DP: 'DP',
  DX: 'DX',
  HP: 'HP',
  HP_REC: 'HP_REC',
  HV: 'HV',
  ID: 'ID',
  IMAGE: 'IMAGE',
  LEVEL: 'LEVEL',
  LK: 'LK',
  MA: 'MA',
  MD: 'MD',
  MP: 'MP',
  MP_REC: 'MP_REC',
  NAME: 'NAME',
  WT: 'WT'
}
];

export default function home () {
  return (
    <Layout>
      <div className="d-flex">
        <Sidebar categories={Object.keys(itemCategories)} />
        <main>
          <Table className='w-100' columns={columns} items={items} />
        </main>
      </div>
    </Layout>
  );
}
