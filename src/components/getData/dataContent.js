import { useState } from "react"

export default function DataContent({ element }) {
    const [active, setActive] = useState(false);
    const [activeBank, setActiveBank] = useState(false);
    const [birthDate, setbirtDate] = useState(false);
    const [Company, setcompnay] = useState(false);
    const [crypto, setcrypto] = useState(false);
    const [data, setdata] = useState(false);
    const [hair, sethair] = useState(false);
    const [inputs, setinputs] = useState(false);

    return (
        <>
            <div className="contiener addres-conteiner">
                <div className="flex items-center justify-between">
                    <h1>Address</h1>
                    <i style={{ transform: `rotate(${active ? '180deg' : '0deg'})` }} onClick={() => setActive(!active)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${active ? 'addres-item active' : 'addres-item'}`}>
                    <div className="address-name">
                        <span>address: {element.address.address}</span>
                        <span>City: {element.address.city}</span>
                        <div className="block" style={{ paddingTop: '13px' }}>
                            <span>lat: {element.address.coordinates.lat}</span>
                            <p>lng: {element.address.coordinates.lng}</p>
                        </div>
                        <span>country: {element.address.country}</span>
                        <span>postalCode: {element.address.postalCode}</span>
                        <span>state: {element.address.state}</span>
                        <span>stateCode: {element.address.stateCode}</span>
                        <span>age: {element.age}</span>
                    </div>
                </div>
            </div>
            <div className="contiener bank-conteiner">
                <div className="flex items-center justify-between">
                    <h1>Bank</h1>
                    <i style={{ transform: `rotate(${activeBank ? '180deg' : '0deg'})` }} onClick={() => setActiveBank(!activeBank)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${activeBank ? 'bank-item active' : 'bank-item'}`}>
                    <span>cardExpire: {element.bank.cardExpire}</span>
                    <span>cardNumber: {element.bank.cardNumber}</span>
                    <span>cardType: {element.bank.cardType}</span>
                    <span>currency: {element.bank.currency}</span>
                    <span>iban: {element.bank.iban}</span>
                </div>
            </div>
            <div className="contiener birthDate">
                <div className="flex items-center justify-between">
                    <h1>birthDate</h1>
                    <i style={{ transform: `rotate(${birthDate ? '180deg' : '0deg'})` }} onClick={() => setbirtDate(!birthDate)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${birthDate ? 'birthDate-item active' : 'birthDate-item'}`} style={{ paddingTop: '13px' }}>
                    <span>birthDate: {element.birthDate}</span>
                </div>
            </div>
            <div className="contiener company">
                <div className="flex items-center justify-between">
                    <h1>Company</h1>
                    <i style={{ transform: `rotate(${Company ? '180deg' : '0deg'})` }} onClick={() => setcompnay(!Company)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${Company ? 'company-item active' : 'company-item'}`}>
                    <span>address: {element.company.address.address}</span>
                    <span>city: {element.company.address.city}</span>
                </div>
            </div>
            <div className="contiener crypto">
                <div className="flex items-center justify-between">
                    <h1>Crypto</h1>
                    <i style={{ transform: `rotate(${crypto ? '180deg' : '0deg'})` }} onClick={() => setcrypto(!crypto)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${crypto ? 'crypto-item active' : 'crypto-item'}`}>
                    <div>
                        <span>coin: {element.crypto.coin}</span>
                        <span>coin: {element.crypto.network}</span>
                        <span>coin: {element.crypto.wallet}</span>
                    </div>
                </div>
            </div>
            <div className="contiener data">
                <div className="flex items-center justify-between">
                    <h1>Data</h1>
                    <i style={{ transform: `rotate(${data ? '180deg' : '0deg'})` }} onClick={() => setdata(!data)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${data ? 'data-item active' : 'data-item'}`}>
                    <div>
                        <span>ein: {element.ein}</span>
                        <span>email: {element.email}</span>
                        <span>eyeColor: {element.eyeColor}</span>
                        <span>firstName: {element.firstName}</span>
                        <span>gender: {element.gender}</span>
                    </div>
                </div>
            </div>
            <div className="contiener hair">
                <div className="flex items-center justify-between">
                    <h1>hair</h1>
                    <i style={{ transform: `rotate(${hair ? '180deg' : '0deg'})` }} onClick={() => sethair(!hair)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${hair ? 'hair-item active' : 'hair-item'}`}>
                    <div>
                        <span>color: {element.hair.color}</span>
                        <span>type: {element.hair.type}</span>
                    </div>
                </div>
            </div>
            <div className="contiener data-input">
                <div className="flex items-center justify-between">
                    <h1>Data-input</h1>
                    <i style={{ transform: `rotate(${inputs ? '180deg' : '0deg'})` }} onClick={() => setinputs(!inputs)} className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={`${inputs ? 'data-input-item active' : 'data-input-item'}`}>
                    <div>
                        <span>lastname: {element.lastname}</span>
                        <span>macAddress: {element.macAddress}</span>
                        <span>maidenName: {element.maidenName}</span>
                        <span>password: {element.password}</span>
                        <span>phone: {element.phone}</span>
                        <span>role: {element.role}</span>
                        <span>ssn: {element.ssn}</span>
                        <span>university: {element.university}</span>
                        <span>userAgent: {element.userAgent}</span>
                        <span>username: {element.username}</span>
                    </div>
                </div>
            </div>
        </>
    )
}