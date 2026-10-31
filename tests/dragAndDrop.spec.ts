import { test, expect } from '../fixtures/dragAndDrop.fixture';

test('TC09: Drag & Drop columns', async ({ dragAndDropPage }) => {
    await dragAndDropPage.openDragAndDropPage();
    await dragAndDropPage.dragAtoB();
    await expect(dragAndDropPage.columnA).toContainText('B');
});
