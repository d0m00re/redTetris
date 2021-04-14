import useActionUser from '../../src/Components/hook/useActionUser';
import { renderHook, act } from '@testing-library/react-hooks'
import {fireEvent} from '@testing-library/react'

describe(('useActionUser'), () => {
    test(('Enter keydown'), () => {
        const { result } = renderHook((() => useActionUser()))

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowDown', code: 'ArrowDown' });
        })
        expect(result.current[0]).toBe('down');
    });

    test(('Reset keydown'), () => {
        const { result } = renderHook((() => useActionUser()))

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowDown', code: 'ArrowDown' });
            fireEvent.keyUp(window);

        })
        expect(result.current[0]).toBe('');
    });

    test(('Undefined'), () => {
        const { result } = renderHook((() => useActionUser()))

        act(() => {
            fireEvent.keyDown(window, { key: 'ArrowDown', code: 'ArrowDown' });
            fireEvent.keyDown(window, {code : 'fake'});

        })
        expect(result.current[0]).toBe('');
    });
});