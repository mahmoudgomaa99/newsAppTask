import {Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import InputView from 'components/molecules/Input';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {useAppDispatch} from 'redux/store';
import Article, { selectQuerring } from 'redux/article';
import { useSelector } from 'react-redux';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const query=useSelector(selectQuerring)
  return (
    <Formik
      initialValues={{query: query.query}}
      onSubmit={values => {
        dispatch(Article.setQuery(values.query));
      }}>
      {props => (
        <InputView
          {...props}
          name="query"
          onSubmitEditing={props.submitForm}
          containerStyling={styles.container}
          leftIcon={<Svg name="search" size={20} />}
          placeholder="Search"
        />
      )}
    </Formik>
  );
};

export default SearchInput;
