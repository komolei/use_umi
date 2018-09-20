import { Card } from 'antd';
const { Meta } = Card;
export default () => {
	const style = {
		width: '400px',
		margin: '30px',
		boxShadow: '0 4px 4px 2px #ccc',
		border: '1px solid red'
	}
	

	return <Card style={style} actions={[<a>action1</a>, <a>action2</a>]}>Hello world 1
		<Meta title='kkomlei' description='www.komolei.com' />
	</Card>
}
