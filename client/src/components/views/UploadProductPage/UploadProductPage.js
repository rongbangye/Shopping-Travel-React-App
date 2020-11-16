import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;
function UploadProductPage() {
  const Continents = [
    { key: 1, value: 'Africa' },
    { key: 2, value: 'Europe' },
    { key: 3, value: 'Asia' },
    { key: 4, value: 'North America' },
    { key: 5, value: 'South America' },
    { key: 6, value: 'Australia' },
    { key: 7, value: 'Antarctica' },
  ];

  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceChange, setPriceChange] = useState('');
  const [ContinentValue, setCountinentValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceChange(event.currentTarget.value);
  };

  const onContinentsSelectChange = (event) => {
    setCountinentValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Upload Travel Product</Title>
      </div>

      <Form onSubmit>
        {/* drop zone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label htmlFor=''>Description</label>
        <TextArea
          name=''
          id=''
          onChange={onDescriptionChange}
          value={DescriptionValue}
          type='text'
        ></TextArea>
        <br />
        <br />
        <label htmlFor=''>Price($)</label>
        <Input type='number' onChange={onPriceChange} value={PriceChange} />

        <select onChange={onContinentsSelectChange}>
          {Continents.map((item) => (
            <option value={item.key} key={item.key}>
              {item.value}
            </option>
          ))}
        </select>

        <br />
        <br />

        <Button onClick>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
