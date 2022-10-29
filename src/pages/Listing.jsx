import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Eye from "../static/assets/eye.svg"

// --redux
import {connect} from "react-redux";
import {listing} from "../redux/actions/listingAction";

function Listing({listing, data}) {

    const navigate = useNavigate();
    useEffect(() => {
        listing()
    }, [])

    const capital = (item) => {
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                return item[key];
            }
        }
    }

    const handleDetail = (item) => {
        navigate(`/details/${item}`)
    }

  return (
      <table className="w-full text-sm text-left text-gray-500 mt-20">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
              <th scope="col" className="py-3 px-6">
                  CCA2
              </th>
              <th scope="col" className="py-3 px-6">
                  common name
              </th>
              <th scope="col" className="py-3 px-6">
                  capital
              </th>
              <th scope="col" className="py-3 px-6">
                  Actions
              </th>
          </tr>
          </thead>
          <tbody>
          {
              data && data.length > 0 && data.map((item, index) => {
                  return <tr key={index} className="bg-white hover:bg-gray-50">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                          {item.cca2}
                      </th>
                      <td className="py-4 px-6">
                          {item.name.common}
                      </td>
                      <td className="py-4 px-6">
                          {capital(item.capital)}
                      </td>
                      <td className="py-4 px-6">
                          <img onClick={() => handleDetail(item.cca3)} className='cursor-pointer' src={Eye} alt={Eye} />
                      </td>
                  </tr>
              })
          }
          </tbody>
      </table>
  )
}

const mapStateToProps = ({ ListingReducer }) => {
    const { loading, data } = ListingReducer;
    return { loading, data };
};

const mapDispatchToProps = {
    listing,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
