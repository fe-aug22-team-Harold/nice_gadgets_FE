/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './FilterInputs.scss';

export const FilterInputs: React.FC = () => {
  return (
    <>
      <h1 className='objectsTitle'>
        Mobile phones
      </h1>

      <h5 className='objectsSubTitle'>
        95 models
      </h5>

      <div className="filter">
        <div className='filter__sortBy sortBy'>
          <p className='sortBy__title'>
              Sort by
          </p>

          <div className="sortBy__select select" tabIndex={1}>
            <input
              className="select__selectopt"
              name="test"
              type="radio"
              id="opt1"
              defaultChecked
            />

            <label htmlFor="opt1" className="select__option">
              Newest
            </label>

            <input
              className="select__selectopt"
              name="test"
              type="radio"
              id="opt2"
            />

            <label htmlFor="opt2" className="select__option">
              Test1
            </label>

            <input
              className="select__selectopt"
              name="test"
              type="radio"
              id="opt3"
            />

            <label htmlFor="opt3" className="select__option">
              Test2
            </label>

            <input
              className="select__selectopt"
              name="test"
              type="radio"
              id="opt4"
            />

            <label htmlFor="opt4" className="select__option">
              Test3
            </label>

            <input
              className="select__selectopt"
              name="test"
              type="radio"
              id="opt5"
            />

            <label htmlFor="opt5" className="select__option">
              Test4
            </label>
          </div>
        </div>

        <div className='filter__itemsOnPage sortBy'>
          <p className='sortBy__title'>
              Items on page
          </p>

          <div
            className="sortBy__select sortBy__select-items select"
            tabIndex={1}
          >
            <input
              className="select__selectopt"
              name="test1"
              type="radio"
              id="opt11"
              defaultChecked
            />

            <label htmlFor="opt11" className="select__option">
              16
            </label>

            <input
              className="select__selectopt"
              name="test1"
              type="radio"
              id="opt22"
            />

            <label htmlFor="opt22" className="select__option">
              5
            </label>

            <input
              className="select__selectopt"
              name="test1"
              type="radio"
              id="opt33"
            />

            <label htmlFor="opt33" className="select__option">
              3
            </label>

            <input
              className="select__selectopt"
              name="test1"
              type="radio"
              id="opt44"
            />

            <label htmlFor="opt44" className="select__option">
              10
            </label>

            <input
              className="select__selectopt"
              name="test1"
              type="radio"
              id="opt55"
            />

            <label htmlFor="opt55" className="select__option">
              1
            </label>
          </div>
        </div>
      </div>
    </>
  );
};