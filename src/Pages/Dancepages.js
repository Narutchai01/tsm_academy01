import React from 'react'
import '../style/Dancepages.css'
import Container from 'react-bootstrap/Container'

export default function Dancepages() {



    return (
        <div className='dancePage'>
            <div className='Dance-header'>
                <div className='text-logo-dance'>
                    <h1>Dance</h1>
                </div>
            </div>
            <Container>
                <div className='contant-body'>
                    <div className='grid-contant-body'>

                            <img src="/images/img1.png" alt="" height="250px" width="250px" />

                            <div className='text-contant-body'>
                                <h2>What you learn</h2>
                                <ul>
                                    <li>
                                        <p>เริ่มจากฝึกพื้นฐานการใช้กล้ามเนื้อ</p>
                                    </li>
                                    <li>
                                        <p>การจับจังหวะเพลง</p>
                                    </li>
                                    <li>
                                        <p>ความกล้าแสดงออก</p>
                                    </li>
                                    <li>
                                        <p>ส่งเสริมบุคลิกภาพ</p>
                                    </li>
                                    <li>
                                        <p>กล้ามเนื้อยืดหยุ่นได้ดี </p>
                                    </li>
                                    <li>
                                        <p>ฝึกทักษะการจำ เสริมสร้างสมาธิ </p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}
