import { TextField } from "@mui/material";
import React from "react";
// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="md:flex bg-white py-4 px-2 gap-5 shadow-md">
          <div className="flex gap-2 items-center">
            <span>
              {/* <MenuIcon /> */}
              <div className="flex gap-[2.5px] flex-col w-[22px]">
                <div className="bg-gray-300 rounded h-[4px]"></div>
                <div className="bg-gray-300 rounded h-[4px]"></div>
                <div className="bg-gray-300 rounded h-[4px]"></div>
              </div>
              {/* <gi GiHamburgerMenu  className ="cursor-pointer flex text-2xl text-gray-800"/> */}
            </span>

            <span className=" flex flex-col">
              <span className="font-bold text-orange-600">BHAARAT STORE </span>
              <p className="text-xs">Your new shopping destination</p>
            </span>
          </div>
          <div>
            <TextField
              placeholder="search for products brands and more..."
              size="small"
              className="w-[400px]"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
