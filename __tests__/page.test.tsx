import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('renders a heading', () => {
        render(<Page />)

        const dashboardTitle = screen.getByText('Dashboard');
        expect(dashboardTitle).toBeInTheDocument();


        // Проверка наличия кнопки с текстом "Add New"
        const addButton = screen.getByText('Add New');
        expect(addButton).toBeInTheDocument();

        // Проверка наличия компонентов BlueAppointment, CustomersCounter, DealsCounter, RecentDetails и т. д.
        const blueAppointmentComponent = screen.getByTestId('blue-appointment');
        expect(blueAppointmentComponent).toBeInTheDocument();

        const customersCountersComponent = screen.getByTestId('customers-counter');
        expect(customersCountersComponent).toBeInTheDocument();

        const recentDetailsComponent = screen.getByTestId('recent-details');
        expect(recentDetailsComponent).toBeInTheDocument();

        const progressDealComponent = screen.getByTestId('progress-deal');
        expect(progressDealComponent).toBeInTheDocument();

        const customersComponent = screen.getByTestId('customers');
        expect(customersComponent).toBeInTheDocument();

        const toDoComponent = screen.getByTestId('to-do');
        expect(toDoComponent).toBeInTheDocument();
    })
})