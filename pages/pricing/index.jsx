import React from 'react'
import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';

export default function Pricing () {
  return (
    <>
        <h1>Pricing Page</h1>
        <h1 className={'title'}>
                {/* Ir a <a href='/'>Home</a> */}
                Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/pricing.js</code>
        </p>
    </>
  )
}

Pricing.getLayout = function getLayout( page ){
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}



