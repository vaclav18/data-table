import data from '../../DummyData/data';

const table = [...data].filter((item,index)=>{
    return index<10
});

export default table;