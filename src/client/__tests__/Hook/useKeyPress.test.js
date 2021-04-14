import useKeyPress from '../../src/Components/hook/useKeyPress';
import { renderHook, act } from '@testing-library/react-hooks'
import {fireEvent} from '@testing-library/react'

describe(('useKeyPress'), () => {
    test(('Enter keydown'), () => {
        const { result } = renderHook((() => useKeyPress()))

        act(() => {
            fireEvent.keyDown(window, { key: 'Enter', code: 'Enter' });
        })
        expect(result.current[0]).toBe('Enter');
    });

    test(('Reset keydown'), () => {
        const { result } = renderHook((() => useKeyPress()))

        act(() => {
            fireEvent.keyDown(window, { key: 'Enter', code: 'Enter' });
            fireEvent.keyUp(window);

        })
        expect(result.current[0]).toBe('');
    })
});