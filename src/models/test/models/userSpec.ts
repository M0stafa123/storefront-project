import { USER } from '../../user';
const user = new USER();
const create = user.create({
  username: 'test',
  password: ''
});

it('should test create method', async () => {
  expect((await create).username).toEqual('test');
});

it('should test index method', async () => {
  const index = await user.index();
  expect(index).toContain(await create);
});

it('should test show method', async () => {
  const show = await user.show(1);
  expect(show.id).toEqual(1);
});
