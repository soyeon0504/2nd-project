import styled from '@emotion/styled';
import React from 'react'

const AdminCateDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
  width: 135px;
  height: 482px;
`;

const AdminCateUl = styled.ul`
  display: block;
  height: 104px;
  border-radius: 3px;
  p {
    color: #000;
    font-size: 1.8rem;
    line-height: 2.2;
    background-color: #FFD4D4;
    padding-left: 1.8rem;
  }
`;

const AdminCateLi = styled.li`
  color: ${props => (props.selected ? "#C14B45" : "#777777")};
  font-weight: ${props => (props.selected ? "500" : "400")};
  font-size: 1.6rem;
  line-height: 1.9;
  padding-left: 1.8rem;
  cursor: pointer;
`;

const AdminCategory = ({selectedItem, adminCate, onSubItemClick}) => {
  return (
    <AdminCateDiv>
      {adminCate.map(item => (
        <AdminCateUl key={item.title}>
          <p>{item.title}</p>
          {item.list.map(subItem => (
            <AdminCateLi
              key={subItem}
              selected={selectedItem === subItem}
              onClick={() => {
                onSubItemClick(subItem);
              }}
            >
              {subItem}
            </AdminCateLi>
          ))}
        </AdminCateUl>
      ))}
    </AdminCateDiv>
  )
}

export default AdminCategory