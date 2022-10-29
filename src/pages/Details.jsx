import React, {useEffect} from 'react';

// --redux
import {connect} from "react-redux";
import {detail} from "../redux/actions/detailAction";

function Details({detail}) {

    useEffect(() => {
        detail(location.pathname.split('/')[2])
    },[])

    return (
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <section className="bg-white p-8 w-[32rem]">
                <img src='https://flagcdn.com/w320/bg.png' alt='flag' className='w-full mb-4' />
                <header className="flex font-light text-sm">
                    <p>Saint Helena, Ascension and Tristan da Cunha</p>
                </header>
                <h2 className="font-bold text-3xl mt-2">
                    Saint Helena, Ascension and Tristan da Cunha
                </h2>
                <ul className='mt-4'>
                    <li>Pound sterling - £</li>
                    <li>Saint Helena pound - £</li>
                </ul>
                <p className="mt-5">
                    Languages: English | Arabic | German
                </p>
            </section>
        </div>
    );
}

const mapStateToProps = ({ DetailReducer }) => {
    const { loading, data } = DetailReducer;
    return { loading, data };
};

const mapDispatchToProps = {
    detail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);