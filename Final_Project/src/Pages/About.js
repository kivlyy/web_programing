import React from 'react'
import { Table, Image } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div style={{ display: "flex", heights: "90vh" }}>
        <strong>
          <h1 style={{ paddingLeft: "60px", fontSize: "100px" }}>ABOUT</h1>
        </strong>
      </div>
      <div>
        <p style={{paddingLeft:"60px", paddingRight:"60px", textAlign:"justify", paddingBottom:"70px"}}>
          Aplikasi atau web yang tersedia ini merupakan, aplikasi yang dimana menampilkan list pokemon yang ada di
          dalam game atau pun dalam anime. Jadi aplikasi ini menyediakan List nama pokemon dan juga beberapa informasi
          tentang pokemon yang berada di dalam aplikasi ini. Pengguna bisa menggunakan kolom search untuk mencari informasi
          dari pokemon yang ingin pengguna mengetahui informasi pokemon tersebut.
        </p>
      </div>
      <div style={{backgroundColor:"gray"}}> 
        <Table>
          <tr>
            <td>
              <Image style={{paddingLeft:"60px",paddingTop:"70px", height:"400px", paddingBottom:"70px"}} src="https://www.kindpng.com/picc/m/214-2149699_silhouette-male-clip-art-male-head-profile-silhouette.png" />        
            </td>
            <td style={{paddingLeft:"100px"}}>
              <ul style={{listStyle:"none", fontSize:"40px", color:"white"}}>
                <li><strong><p style={{fontSize:"60px"}}>Personal Information</p></strong></li>
                <li><p>Kivly Danovan Kalengkongan</p></li>
                <li><p>105011910035</p></li>
                <li><p>Information System</p></li>
              </ul> 
            </td>
          </tr>
        </Table>
      </div>
      <div>
        <Image style={{paddingLeft:"70px", paddingTop:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />
      </div>
    </>
  )
}

export default About
