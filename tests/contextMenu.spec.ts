import { test, expect } from '../fixtures/contextMenu.fixture';

test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {
    await contextMenuPage.openContextMenuPage();
    const alertMessage = await contextMenuPage.rightClickHotSpotAndGetAlertMessage();
    expect(alertMessage).toBe('You selected a context menu');
});
