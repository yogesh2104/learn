import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi"; //! npm install react-icons --save
import { RiDeleteBin6Line} from "react-icons/ri"; //! npm install react-icons --save

const SideStone = () => {
  const [noOfRows, setNoOfRows] = useState(1);

  const baseurl = "http://192.168.1.215/stage_dioraadams/api/parameters";
  const [getresult, setResults] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    let formData = new FormData();
    formData.append("type", "diamond");
    formData.append("paraname[]", "Shape");
    formData.append("paraname[]", "Clarity");
    formData.append("paraname[]", "Color");

    await fetch(baseurl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data?.data);
      });
  };
  const deleteHandle = () => {
    setNoOfRows(function (num) {
      if (num > 1) {
        return (num -= 1);
      } else {
        return (num = 1);
      }
    });
  };

  return (
    <>
      <div className="bg-color">
        <div className="text-right m">
          <button
            className="pdd new-add-btnn btnn"
            onClick={() => setNoOfRows(noOfRows + 1)}
          >
            Add <BiPlusMedical />
          </button>
        </div>
        <div className="table-responsive m mt-2">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th className="w-9">isGem</th>
                <th className="w-20">Shape</th>
                <th className="w-16">Color</th>
                <th className="w-16">Clarity</th>
                <th className="w-11">Carat</th>
                <th className="w-11">Pieces</th>
                <th className="w-11">Weight</th>
                <th className="w-15">
                  <RiDeleteBin6Line />
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(noOfRows)].map((arr, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <label className="m">
                        <input type="checkbox" />
                      </label>
                    </td>
                    <td>
                      <select className="form-con">
                        {getresult?.Shape?.map((item, index) => {
                          return (
                            <option className="" key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>
                      <select className="form-con">
                        {getresult?.Color?.map((item, index) => {
                          return (
                            <option className="" key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>
                      <select className="form-con">
                        {getresult?.Clarity?.map((item, index) => {
                          return (
                            <option className="" key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>
                      <input type="text" className="form-con" />
                    </td>
                    <td>
                      <input type="text" className="form-con" />
                    </td>
                    <td>
                      <input type="text" className="form-con" />
                    </td>
                    <td className="bg-red text-center">
                      <RiDeleteBin6Line
                        onClick={() =>{
                          deleteHandle();
                          // handleDel(index);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SideStone;
