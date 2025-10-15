import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BarChart from './pages/BarChart'
import LineChart from './pages/LineChart'

export default function AdicionarRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BarChart />} />
                <Route path='/LineChart' element={<LineChart />} />
            </Routes>
        </BrowserRouter>
    )
}