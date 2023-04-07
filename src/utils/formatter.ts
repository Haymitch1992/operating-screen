// 格式化性别
interface Row { 
  gender: string;
}
export function calcGender(row: Row) {
  if (row.gender === 'male') {
    return '男';
  } else {
    return '女';
  }
}
