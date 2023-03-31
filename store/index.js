import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    return new Vuex.Store({
        state: {
            Duans: [],
            SanPham: [],
            Blog: [],
            Blo: {},
            Anh: {},
            DAimgae: [],
            DAi: {},

        },
        mutations: {

            // Dự Án / Dự Án image

            GET_DUANS(state, Duans) {
                state.Duans = Duans
            },
            GET_I(state, DAimgae) {
                state.DAimgae = DAimgae
            },
            GET_DAI(state, DAi) {
                state.DAi = DAi
            },
            DELETE_I(state, id) {
                state.DAimgae = state.DAimgae.filter((DAimgae) => DAimgae.id !== id)
            },
            ADDI(state, i) {
                state.DAimgae.unshift(i)
            },

            //Sản Phẩm
            GET_SP(state, SanPham) {
                state.SanPham = SanPham
            },
            GET_GIDAY(state, Anh) {
                state.Anh = Anh
            },

            //Blog
            GET_BLOG(state, Blog) {
                state.Blog = Blog
            },
            GET_BYIDBLOG(state, Blo) {
                state.Blo = Blo
            },
            DELETE_BV(state, id) {
                state.Blog = state.Blog.filter((Blo) => Blo.id !== id)
            },
            ADDBLOG(state, blog) {
                state.Blog.unshift(blog)
            },
            UPBLOG(state, blog) {
                state.Blog.push(blog)
            },

        },
        getters: {
            Duans(state) {
                return state.Duans
            },

            DAimgae(state) {
                return state.DAimgae
            },
            SanPham(state) {
                return state.SanPham
            },
            Anh(state) {
                return state.Anh
            },
            Blog(state) {
                return state.Blog
            },

            Blo(state) {
                return state.Blo
            },
            DAi(state) {
                return state.DAi
            }

        },
        actions: {
            async getDuans({ commit }) {
                try {
                    const response = await axios.get(`http://192.168.1.82:7654/api/DuAn`)
                    commit("GET_DUANS", response.data)
                    // eslint-disable-next-line no-console
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },

            async getImage({ commit }, params) {
                try {
                    const response = await axios.post(`http://192.168.1.82:7654/api/DuAn/getall`, params)
                    commit("GET_I", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async getByIDI({ commit }, id) {
                try {
                    const response = await axios.get(`http://192.168.1.82:7654/api/DuAn/DuAnImage/id?id=${id}`)
                    commit("GET_DAI", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async deleteI({ commit }, id) {
                try {
                    await axios.delete(`http://192.168.1.82:7654/api/DuAn/DuAnImage/id?id=${id}`);
                    commit("DELETE_I", id)
                } catch (error) {
                    console.log(error)
                }
            },
            async addI({ commit }, i) {
                try {
                    await axios.post(`http://192.168.1.82:7654/api/DuAnImage`, i)
                    commit("ADDI", i)
                } catch (error) {
                    console.log(error)
                }
            },
            async UpdateI({ commit }, blog) {
                try {
                    await axios.put(`http://192.168.1.82:7654/api/DuAnImage`, blog)
                    commit("UPBLOG", blog)
                } catch (error) {
                    console.log(error)
                }
            },


            async getSanPham({ commit }) {
                try {
                    const response = await axios.get(`http://192.168.1.82:7654/api/SanPham`)
                    commit("GET_SP", response.data)
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getSPById({ commit }, id) {
                try {
                    const response = await axios.get(`http://192.168.1.82:7654/api/SanPham/detail/id?id=${id}`)
                    commit("GET_GIDAY", response.data)
                } catch (error) {
                    console.log(error)
                }
            },


            async getBlog({ commit }, params) {
                try {
                    const response = await axios.post(`http://192.168.1.82:7654/api/Blog/getall`, params)
                    commit("GET_BLOG", response.data)

                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getByIdBlog({ commit }, id) {
                try {
                    const response = await axios.get(`http://192.168.1.82:7654/api/Blog/get/id?id=${id}`)
                    commit("GET_BYIDBLOG", response.data)
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async deleteBlog({ commit }, id) {
                try {
                    await axios.delete(`http://192.168.1.82:7654/api/Blog/id?id=${id}`);
                    commit("DELETE_BV", id)
                } catch (error) {
                    console.log(error)
                }
            },
            async addBlog({ commit }, blog) {
                try {
                    await axios.post(`http://192.168.1.82:7654/api/Blog`, blog)
                    commit("ADDBLOG", blog)
                } catch (error) {
                    console.log(error)
                }
            },
            async UpdateBlog({ commit }, blog) {
                try {
                    await axios.put(`http://192.168.1.82:7654/api/Blog`, blog)
                    commit("UPBLOG", blog)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    })
}
export default createStore 